var sendgrid  = require('sendgrid')(sendgrid_api_key);
sendgrid.send({
  to:       'example@example.com',
  from:     'other@example.com',
  subject:  'Hello World',
  text:     'My first email through SendGrid.'
}, function(err, json) {
  if (err) { return console.error(err); }
  console.log(json);
});



var params = {
  smtpapi:  new sendgrid.smtpapi(),
  to:       [],
  toname:   [],
  from:     'myVote',
  fromname: '',
  subject:  'Cast your ballot',
  text:     '',
  html:     '',
  bcc:      [],
  cc:       [],
  replyto:  '',
  date:     email.setDate(),
  files: [
    {
      filename:     '',           // required only if file.content is used. 
      contentType:  '',           // optional 
      cid:          '',           // optional, used to specify cid for inline content 
      path:         '',           // 
      url:          '',           // == One of these three options is required 
      content:      ('' | Buffer) // 
    }
  ],
  file_data:  {},
  headers:    {}
};