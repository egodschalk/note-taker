const fs = require('fs/promises');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = (destination) =>
  fs.readFile(destination, 'utf-8').then((data) => JSON.parse(data)).catch( (err) => {
    console.error(err)
  });
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4)).catch( (err) => {
    console.error(err)
  });
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = async (content, file) => {
  const parsedData = await readFromFile(file)
      parsedData.push(content);
      await writeToFile(file, parsedData);
      return parsedData;
    }


module.exports = { readFromFile, writeToFile, readAndAppend };
