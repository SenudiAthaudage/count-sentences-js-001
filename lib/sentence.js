'use strict';

const countSentences = function(sentences){

  let matches = sentences.match(/[.!?]/g);
  return matches ? matches.length : 0;
  
};

module.exports = countSentences;
