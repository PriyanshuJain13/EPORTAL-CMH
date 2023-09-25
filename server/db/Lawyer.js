const mongoose = require("mongoose");

// Schema

//Details of All Active Cases
// Fetch all the cases data on the bases of Lawyer Name and email whose status is "P"
const activeCases = mongoose.Schema({
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
});

// hearing of Cases (Schedule)
// Google calander pe redirect krwado chaho to with meet links.
const hearing = mongoose.Schema({
  caseID: {
    type: Number,
  },
  caseTitle: {
    type: String,
  },
});

// Archive Cases
// fetch all the cases on the basis of name of lawyer and email with  status of cases "R"--> Resolved

const archived = mongoose.Schema({
  name: {
    type: String,
  },
  mail: {
    type: String,
  },
});

// Information of Judge

const infoOfJudge = mongoose.Schema({
  caseID: {
    type: Number,
  },
  caseTitle: {
    type: String,
  },
});
