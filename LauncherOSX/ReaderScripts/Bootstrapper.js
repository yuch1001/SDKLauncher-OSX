//  Copyright (c) 2014 Readium Foundation and/or its licensees. All rights reserved.
//  
//  Redistribution and use in source and binary forms, with or without modification, 
//  are permitted provided that the following conditions are met:
//  1. Redistributions of source code must retain the above copyright notice, this 
//  list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice, 
//  this list of conditions and the following disclaimer in the documentation and/or 
//  other materials provided with the distribution.
//  3. Neither the name of the organization nor the names of its contributors may be 
//  used to endorse or promote products derived from this software without specific 
//  prior written permission.

define(['eventEmitter', 'URIjs', 'epubCfi', 'epub-renderer/globals'], function (EventEmitter, URI, epubCfi, Globals) {
    //expose required modules for sharedJS consumption.
    window.URI = URI;

    EventEmitter.prototype.trigger = EventEmitter.prototype.emit;
    window.EventEmitter = EventEmitter;
    
    window.ReadiumSDK = Globals;

    //we need global access to the reader object for automation test being able to call it's APIs
    Globals.reader = this.reader;


    //polyfill to support Safari 6
    if ('URL' in window === false) {
        if ('webkitURL' in window === false) {
            throw Error('Browser does not support window.URL');
        }

        window.URL = window.webkitURL;
    }
});