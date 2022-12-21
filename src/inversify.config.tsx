import { Container } from 'inversify';
import { Store } from '@store/store';
import 'reflect-metadata';

/* eslint-disable */
export const container = new Container({ defaultScope: 'Singleton' });

container.bind(Store).toSelf();
