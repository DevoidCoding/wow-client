'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        this.log(yosay('Welcome to the prime ' + chalk.red('generator-wow') + ' generator!'));
    }
};
