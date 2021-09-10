import { Container } from "inversify";
import { Store } from "../../store/store";
import 'reflect-metadata';

const container = new Container();
container.bind(Store).toSelf();
export { container };