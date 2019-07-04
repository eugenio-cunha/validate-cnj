/** Declaration file generated by dts-gen */

type StringOrNumber = string | number;

interface JusticeParameters {
    justice: StringOrNumber;
    number: StringOrNumber;
    court: StringOrNumber;
}

export class Validate {
    static factory<T extends typeof Validate>(this: T, proc: StringOrNumber, 
                      args: JusticeParameters,
                      year: StringOrNumber): InstanceType<T>;
    static load<T extends typeof Validate>(this: T, cnj: string): InstanceType<T>;

    public readonly proc: string;
    public readonly year: string;
    public readonly justice: string;
    public readonly number: string;
    public readonly court: string;

    public readonly pieces: {
        proc: string,
        year: string,
        justice: string,
        number: string,
        court: string,
    };

    constructor(proc: StringOrNumber, 
                dv: StringOrNumber | null,
                year: StringOrNumber,
                justice: StringOrNumber,
                number: StringOrNumber,
                court: StringOrNumber);

    public generate(mask?: boolean): string;
}

export class Exception extends Error {}
