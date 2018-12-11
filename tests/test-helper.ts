// @ts-ignore
import Application from '../app';
import config from 'dummy/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import 'qunit-dom';
import './helpers/custom-types';

setApplication(Application.create(config.APP));
start();
