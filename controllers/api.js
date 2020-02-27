const { promisify } = require('util');
const cheerio = require('cheerio');
const graph = require('fbgraph');
const { LastFmNode } = require('lastfm');
const tumblr = require('tumblr.js');
const { Octokit } = require('@octokit/rest');
const Twit = require('twit');
const stripe = require('stripe')(process.env.STRIPE_SKEY);
const twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const clockwork = require('clockwork')({ key: process.env.CLOCKWORK_KEY });
const paypal = require('paypal-rest-sdk');
const lob = require('lob')(process.env.LOB_KEY);
const ig = require('instagram-node').instagram();
const axios = require('axios');
const { google } = require('googleapis');
const Quickbooks = require('node-quickbooks');
const validator = require('validator');

Quickbooks.setOauthVersion('2.0');

/**
 * GET /api
 * List of API examples.
 */
exports.getApi = (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
};
