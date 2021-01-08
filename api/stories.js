module.exports = async (req, res) => {

   const testdata = {stories: [
        {
            date: "2020-12-26",
            transcriber: "Author #1",
            contributor: "Contributor #1",
            contact_email: "devcmontgomery@gmail.com",
            contact_phone: "555-555-5555",
            summary: "Summary #1",
            story: "Story #1 more ",
            image:"https://res.cloudinary.com/djsz02nwd/image/upload/v1609003407/20181020_IRP003_0_mpri0p.jpg"
        },
        {
            date: "2020-12-26",
            transcriber: "Author #2",
            contributor: "Contributor #2",
            contact_email: "devcmontgomery@gmail.com",
            contact_phone: "555-555-5555",
            summary: "Summary #2",
            story: "Story #2 more ",
            image:"https://res.cloudinary.com/djsz02nwd/image/upload/v1609003407/20181020_IRP003_0_mpri0p.jpg"
        },
        {
            date: "2020-12-26",
            transcriber: "Author #3",
            contributor: "Contributor #3",
            contact_email: "devcmontgomery@gmail.com",
            contact_phone: "555-555-5555",
            summary: "Summary #3",
            story: "Story #3 more ",
            image:"https://res.cloudinary.com/djsz02nwd/image/upload/v1609003407/20181020_IRP003_0_mpri0p.jpg"
        },
        ]}


  res.status(200).end(JSON.stringify(testdata));

  //
  // future if you want action types
  //
  //const {
  //  query: { action },
  //} = req
  //if (action === "get") {
  // res.status(200).end(`Get event succesfully` +f1.key);
  // } else {
  // more action TBD
  // }

}
