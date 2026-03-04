// This is the code for your AWS Lambda function (Amplify Backend)
// You need to install 'stripe' in this function's package.json: npm install stripe uuid aws-sdk
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();

// Environment variables for Table Names (set these in Amplify Console or CLI)
const MEMBERSHIP_TABLE = process.env.MEMBERSHIP_TABLE_NAME || 'Memberships'; 
const CONTACT_TABLE = process.env.CONTACT_TABLE_NAME || 'ContactSubmissions';

exports.handler = async (event) => {
    // Enable CORS
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // Handle different paths
    const path = event.path || event.requestContext?.http?.path; 
    const httpMethod = event.httpMethod || event.requestContext?.http?.method;
    
    let body = {};
    if (event.body) {
        body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    }

    try {
        console.log(`Processing: ${httpMethod} ${path}`);
        
        // 1. Create Payment Intent (Stripe)
        // Matches /create-payment-intent
        if (path === '/create-payment-intent' || path.endsWith('/create-payment-intent')) {
            const { amount, currency } = body;
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: currency || 'usd',
                automatic_payment_methods: { enabled: true },
            });

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    clientSecret: paymentIntent.client_secret,
                }),
            };
        }

        // 2. Confirm Membership (Save to DynamoDB after Stripe success)
        // Matches /confirm-membership
        if (path === '/confirm-membership' || path.endsWith('/confirm-membership')) {
            const { paymentIntentId, registrationData } = body;

            // Add ID if missing
            const id = uuidv4();
            const item = {
                id: id,
                paymentIntentId: paymentIntentId,
                ...registrationData,
                createdAt: new Date().toISOString(),
                type: 'Membership'
            };

            const params = {
                TableName: MEMBERSHIP_TABLE,
                Item: item
            };

            await docClient.put(params).promise();

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, id: item.id }),
            };
        }

        // 3. Contact Form Submission (Save to DynamoDB)
        // Matches /contact
        if (path === '/contact' || path.endsWith('/contact')) {
            const id = uuidv4();
            const item = {
                id: id,
                ...body, // name, email, message, etc.
                createdAt: new Date().toISOString(),
                type: 'ContactSubmission'
            };

            const params = {
                TableName: CONTACT_TABLE,
                Item: item
            };

            await docClient.put(params).promise();

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ success: true, id: item.id }),
            };
        }

        return {
            statusCode: 404,
            headers,
            body: JSON.stringify({ error: `Route not found: ${path}` }),
        };

    } catch (error) {
        console.error('Lambda Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
