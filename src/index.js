import { diagnosticTests } from './data/tests.js';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (url.pathname === '/search' || url.pathname === '/api/test') {
      let query = url.searchParams.get('q');

      if (!query && request.method === 'POST') {
        try {
          const body = await request.json();
          query = body.query || body.test_name || body.q;
        } catch {
          // ignore parsing error
        }
      }

      if (!query) {
        return new Response(
          JSON.stringify({ error: 'Please provide a test name via ?q= or JSON body.' }),
          { status: 400, headers: corsHeaders }
        );
      }

      const q = query.trim().toLowerCase();
      const results = diagnosticTests.filter((item) => {
        return item["TEST NAME"].toLowerCase().includes(q);
      });

      return new Response(
        JSON.stringify({ query, count: results.length, results }),
        { status: 200, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Rabindra CarePoint Price & TAT API is running.' }),
      { status: 200, headers: corsHeaders }
    );
  },
};