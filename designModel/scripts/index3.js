import proxy from './lib/proxy.js';

let validateProxy = new proxy.ValidateProxy();
validateProxy.message("123");

let delayProxy = new proxy.DelayProxy();
delayProxy.message("1234567890");

proxy.validate("abcdefghijk");
proxy.delay("lmnopqrstuvwxyz");