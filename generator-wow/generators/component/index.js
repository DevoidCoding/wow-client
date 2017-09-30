'use strict';
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        const prompts = [
            {
                name: 'component',
                message: 'Name of the component: ',
            },
        ];

        return this.prompt(prompts).then(props => {
            if (props.component.toLowerCase().startsWith('renderer')) props.component = props.component.slice(3);
            this.props = props;
        });
    }

    getComponentInfos() {
        var componentRegex = /([A-Z]+[a-z]*)/g;
        var matches = this.props.component.match(componentRegex);
        var path = matches.join('/');
        var filename = matches[matches.length - 1];
        return {
            path,
            filename,
            name: this.props.component,
        };
    }

    writing() {
        var componentInfos = this.getComponentInfos();

        this.fs.copyTpl(this.templatePath('component.ts'), this.destinationPath(`src/renderer/components/${componentInfos.path}/${componentInfos.filename}.ts`), {
            name: `${componentInfos.name}`,
        });
        this.fs.copyTpl(this.templatePath('component.vue'), this.destinationPath(`src/renderer/components/${componentInfos.path}/${componentInfos.filename}.vue`), {
            filename: componentInfos.filename,
        });
        this.fs.copyTpl(this.templatePath('component.scss'), this.destinationPath(`src/renderer/components/${componentInfos.path}/${componentInfos.filename}.scss`));
    }
};
