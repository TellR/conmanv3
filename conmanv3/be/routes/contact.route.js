const contactRoutes = (app, fs) => {
  
  var path = require('path');
  
  
  var CONTACTS_FILE = path.join(__dirname, '../data/contact-data.json');
  
  app.get('/contacts', function(req, res) {
      fs.readFile(CONTACTS_FILE, function(err, data) {
          if (err) {
              console.error(err);
              process.exit(1);
          }
          res.json(JSON.parse(data));
      });
  });
  
  
  app.get('/contact/:id', function(req, res) {
  
      fs.readFile(CONTACTS_FILE, function(err, data) {
          if (err) {
              console.error(err);
              process.exit(1);
          }
          var j = JSON.parse(data);

        
            if(j.id == req.params.id)
            {
                res.json(j);
                
            }
        
      });
  });
  
  app.post('/contact', function(req, res) {
  
      fs.readFile(CONTACTS_FILE, function(err, data) {
          if (err) {
              console.error(err);
              process.exit(1);
          }
          var contacts = JSON.parse(data);
  
          var newcontact = {
              id: Date.now(),
              nama: req.body.nama,
              nohp: req.body.nohp,
              email: req.body.email,
              alamat: req.body.alamat
          };
          contacts.push(newcontact);
          fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 4), function(err) {
              if (err) {
                  console.error(err);
                  process.exit(1);
              }
              res.json(contacts);
          });
      });
  });
  
  app.patch('/contact/edit/:id', function(req, res) {
      fs.readFile(CONTACTS_FILE, function(err, data) {
          if (err) {
              console.error(err);
              process.exit(1);
          }
          var contacts = JSON.parse(data);
  
          for(var i = 0; i <= contacts.length; i++)
          {
              if(contacts[i].id == req.params.id)
              {
                  var contact = contacts[i];
                  contact.nama = req.body.nama;
                  contact.nohp = req.body.nohp;
                  contact.email = req.body.email;
                  contact.alamat = req.body.alamat;
  
                  contacts.splice(i, 1);
                  contacts.push(contact);
  
                  fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 4), function(err) {
                      if (err) {
                          console.error(err);
                          process.exit(1);
                      }
                      res.json(contacts);
                  });
                  break;
              }
          }
      });
  });
  
  app.delete('/contact/delete/:id', function(req, res) {
      fs.readFile(CONTACTS_FILE, function(err, data) {
          if (err) {
              console.error(err);
              process.exit(1);
          }
          var contacts = JSON.parse(data);
  
          for(var i = 0; i <= contacts.length; i++)
          {
              if(contacts[i].id == req.params.id)
              {
                  contacts.splice(i, 1);
  
                  fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 4), function(err) {
                      if (err) {
                          console.error(err);
                          process.exit(1);
                      }
                      res.json(contacts);
                  });
                  break;
              }
          }
      });
  });
  


};

module.exports = contactRoutes;