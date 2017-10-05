export class CustomRegularExpressions {
  constructor(
    // General
    public standardCharacters: RegExp = /^[A-Za-z0-9\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\\\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~]+/,
    public hasUpper: RegExp = /[A-Z]/,
    public hasLower: RegExp = /[a-z]/,
    public hasSpace: RegExp = /[ ]/,
    public hasNumber: RegExp = /[0-9]/,
    public hasLetter: RegExp = /[a-zA-Z]/,
    public hasSpecialCharacter: RegExp = /[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\\\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}\~]/,
    // Name
    public name: RegExp = /^[a-z ,.'-]+$/i,
    // Dates
    public year: RegExp = /^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/,
    public dateOfBirth: RegExp = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/,
    // Private
    public accountNumber: RegExp = /^\w{1,17}$/,
    public routingNumber: RegExp = /^((0[0-9])|(1[0-2])|(2[1-9])|(3[0-2])|(6[1-9])|(7[0-2])|80)([0-9]{7})$/,
    public ssn: RegExp = /^\d{3}-\d{2}-\d{4}$/,
    // Address
    public address: RegExp = /^[a-zA-Z0-9\s,.'-]+$/i,
    public city: RegExp = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/i,
    public state: RegExp = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/i,
    public stateShort: RegExp = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/i,
    public zip: RegExp = /^\d{5}$|^\d{5}-\d{4}$/i
  ) {}
}