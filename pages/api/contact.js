// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req);
  res.status(200).json({ name: 'John Doe' })

  // create an email functionality here using gmail api
  // https://developers.google.com/gmail/api/quickstart/nodejs
  // https://developers.google.com/gmail/api/guides/sending
  
}
