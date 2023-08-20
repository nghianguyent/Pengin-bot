import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILE = 'config.yaml';

export default () => {
    return yaml.load(
        readFileSync(join('./config', YAML_CONFIG_FILE), 'utf-8'),
    ) as Record<string, any>;
};
