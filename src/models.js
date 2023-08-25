export class PersonalInfo {
  constructor() {
    this.name = "";
    this.email = "";
    this.phone = "";
    this.complete = false;
  }
}

export class Plan {
  constructor() {
    this.plan = "";
    this.yearly = false;
    this.complete = false;
  }
}

export class AddOns {
  constructor() {
    this.online = false;
    this.storage = false;
    this.custom = false;
    this.complete = false;
  }
}

export class FinishUp {
  constructor() {}
}
