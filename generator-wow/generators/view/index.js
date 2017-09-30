'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        this.isBase = this.options.base || false;

        const prompts = [
            {
                name: 'view',
                message: 'Name of the view: ',
            },
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    getViewInfos() {
        var viewRegex = /([A-Z]+[a-z]*)/g;
        var matches = this.props.view.match(viewRegex);
        var path = matches.join('/');
        var filename = matches[matches.length - 1];
        return {
            path,
            filename,
            name: this.props.view,
        };
    }

    writing() {
        var viewInfos = this.getViewInfos();
        if (this.isBase) {
            this.fs.copyTpl(this.templatePath('base/base.route.ts'), this.destinationPath(`src/renderer/views/${viewInfos.path}/${viewInfos.filename}.route.ts`), {
                name: viewInfos.name,
                filename: viewInfos.filename,
            });
            this.fs.copyTpl(this.templatePath('base/base.ts'), this.destinationPath(`src/renderer/views/${viewInfos.path}/${viewInfos.filename}.ts`), {
                name: viewInfos.name,
            });
        } else {
            this.fs.copyTpl(this.templatePath('base.route.ts'), this.destinationPath(`src/renderer/views/${viewInfos.path}/${viewInfos.filename}.route.ts`), {
                filename: viewInfos.filename,
                name: viewInfos.name,
            });
            this.fs.copyTpl(this.templatePath('base.scss'), this.destinationPath(`src/renderer/views/${viewInfos.path}/${viewInfos.filename}.scss`), {});
            this.fs.copyTpl(this.templatePath('base.ts'), this.destinationPath(`src/renderer/views/${viewInfos.path}/${viewInfos.filename}.ts`), {
                name: viewInfos.name,
            });
            this.fs.copyTpl(this.templatePath('base.vue'), this.destinationPath(`src/renderer/views/${viewInfos.path}/${viewInfos.filename}.vue`), {
                filename: viewInfos.filename,
            });
        }
    }
};
