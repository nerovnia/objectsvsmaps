'use strict';

class Man {
  constructor() {
    this.writeObjTime = [];
    this.writeMapTime = [];
    this.diffWrite = [];
    this.readObjTime = [];
    this.readMapTime = [];
    this.diffRead = [];
  }
}

class MesurementsData {
  constructor() {
    this.man1 = new Man();
    this.man2 = new Man();
  };
}

module.exports = MesurementsData;