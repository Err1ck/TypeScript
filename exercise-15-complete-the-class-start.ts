/**
 * START: Follow the instructions below.
 */

class Currency {
  // Add types for these fields and make them private.
  // Hint: Look at the type of values being passed when `new Currency()`
  // is called below.

  name: string;
  code: string;
  symbol: string;

  // Add types to the constructor parameters.

  constructor(name: string, code: string, symbol: string) {
    this.name = name;

    // Store the `code` and `symbol` parameter values in
    // their corresponding class fields.
    this.code = code;
    this.symbol = symbol;
  }

  // Methods are public by default.
  // Add a visibility modifier to make it clear this method is public.
  //
  // Add a return type for this method
  // Hint: Look at the inferred return type.

  public describe(): string {
    // Replace the `null` values below with the appropriate field values.
    // Hint: Access field values with: this.fieldName

    return `The ${null} currency has the code ${null} and uses the symbol ${null}.`;
  }
}

// ----

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira.describe());

// Call the `describe()` method on the `currencyNaira` object.

// ----

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

// Call the `describe()` method on the `currencyUsDollar` object.
console.log(currencyUsDollar.describe());
// ----

export {};
