var pubsub = {
	/**
	 *
	 * object structure
	events: {
		eventName1: [{
			id: any, // for the ones that subscribe to any object
			callbacks: [{
				callback:fn1,
				token: token
			}, {
				callback:fn2,
				token: token,
			}, {
				callback:fn3,
				token: token
			}]
		}, {
			id: who1,
			callbacks: [{
				callback:fn1,
				token: token
			}, {
				callback:fn2,
				token: token,
			}, {
				callback:fn3,
				token: token
			}]
		}, {
			id: who2,
			callbacks: [{
				callback:fn1,
				token: token
			}, {
				callback:fn2,
				token: token,
			}, {
				callback:fn3,
				token: token
			}]
		}],
		eventName2: [{
			id: who1,
			callbacks: [{
				callback:fn1,
				token: token
			}, {
				callback:fn2,
				token: token,
			}, {
				callback:fn3,
				token: token
			}]
		}, {
			id: who2,
			callbacks: [{
				callback:fn1,
				token: token
			}, {
				callback:fn2,
				token: token,
			}, {
				callback:fn3,
				token: token
			}]
		}]
	}
	happened: {
		eventName1: [{
			id: any, // for the ones that subscribe to any object
			data: data1
		}, {
			id: who1,
			data: data1
		}, {
			id: who2,
			data: data2
		}],
		eventName2: [{
			id: who1,
			data: data1
		}, {
			id: who2,
			data: data2
		}]
	}
	 */

	events: {},
	happened: {}, // holds eventNames and data of the most recent event, to handle a promise-like behavior, where if an event already happened before a handler is registered, the handler is called immediately when registered
	/**
	 *
	 * @param who (pass in an empty string to indicate that you're listening for anyone with this event name)
	 * @param eventName
	 * @param fn
	 * @returns token
	 */
	on: function(who, eventName, fn){
		who = who || 'any';

		var token = Utils.guid();
		this.events[eventName] = this.events[eventName] || [];

		var obj = $.grep(this.events[eventName], function(element, index){
			return element.id === who;
		});
		if(obj.length === 0){
			this.events[eventName].push({
				id: who,
				callbacks: [{callback:fn, token: token}]
			});
		}
		else{
			obj = obj[0];
			obj.callbacks.push({callback:fn, token: token});
		}

		return token;
	},
	when: function(who, eventName, fn){
		// promise-like event registration which uses the happened object

		who = who || 'any';

		var token = Utils.guid();
		this.events[eventName] = this.events[eventName] || [];

		let obj = $.grep(this.events[eventName], function(element, index){
			return element.id === who;
		});
		if(obj.length === 0){
			this.events[eventName].push({
				id: who,
				callbacks: [{callback:fn, token: token}]
			});
		}
		else{
			obj = obj[0];
			obj.callbacks.push({callback:fn, token: token});
		}

		// now check if event has happened before
		if(this.happened.hasOwnProperty(eventName)) {
			obj = $.grep(this.happened[eventName], function(element, index){
				return element.id === who;
			});

			if(obj.length === 1){
				fn(obj[0].data);
			}
		}
		return token;
	},
	off: function(who, eventName, token){
		if(this.events[eventName]){
			who = who || 'any';

			let obj = $.grep(this.events[eventName], function(element, index){
				return element.id === who;
			});

			if(obj.length === 1){
				obj = obj[0];
				let callbacks = obj.callbacks;
				for(let i = 0; i < callbacks.length; i++){
					if(callbacks[i].token === token){
						callbacks.splice(i, 1);
						i -= 1;
						return true;
					}
				}
			}
			else{
				return false;
			}

			//for(let i = 0; i < this.events[eventName].length; i++){
			//	if(this.events[eventName][i].token === token){
			//		this.events[eventName].splice(i, 1);
			//		i -= 1;
			//		return true;
			//	}
			//}
		}
		return false;
	},
	emit: function(who, eventName, data){

		data = $.extend(data, {who: who});

		// Deal with happened
		this.happened[eventName] = this.happened[eventName] || [{id: 'any', data: null}];

		let any = $.grep(this.happened[eventName], function(element, index){
			return element.id === 'any';
		})[0]; // no need to check, there will always be id any
		any.data = data;

		let obj = $.grep(this.happened[eventName], function(element, index){
			return element.id === who;
		});

		if(obj.length === 0){
			this.happened[eventName].push({id: who, data: data});
		}
		else{
			obj[0].data = data;
		}

		// Deal with events
		if(this.events[eventName]){
			let event = this.events[eventName];
			objs = $.grep(event, function(element, index){
				return element.id === 'any' || element.id === who;
			});
			if(objs.length > 0){
				objs.forEach(function(obj){
					let callbacks = obj.callbacks;
					callbacks.forEach(function(o){
						o.callback(data);
					});
				});
			}
		}

		//this.happened[eventName] = data;
		//if(this.events[eventName]){
		//	this.events[eventName].forEach(function(obj){
		//		obj.callback(data);
		//	});
		//}
	}
};