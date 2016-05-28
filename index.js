module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    worker: true,
    serviceworker: true,
    es6: true
  },
  rules: {
    // Possible Errors: http://eslint.org/docs/rules/#possible-errors
    'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,

    // Best Practices: http://eslint.org/docs/rules/#best-practices
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    complexity: [
      2,
      12
    ],
    'consistent-return': 2,
    curly: 2,
    'dot-notation': 2,
    'dot-location': [
      2,
      'property'
    ],
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implicit-coercion': [
      2,
      {
        boolean: false,
        number: true,
        string: true
      }
    ],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-octal': 2,
    'no-proto': 2,
    'no-redeclare': [
      2,
      {
        builtinGlobals: true
      }
    ],
    'no-return-assign': [
      2,
      'always'
    ],
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    radix: 2,
    'wrap-iife': [
      2,
      'inside'
    ],
    yoda: [
      2,
      'never',
      {
        exceptRange: true
      }
    ],

    // Variables: http://eslint.org/docs/rules/#variables
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,

    // Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
    'handle-callback-err': 2,
    'no-mixed-requires': [
      2,
      true
    ],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,

    // Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'block-spacing': 2,
    'brace-style': [
      2,
      '1tbs'
    ],
    camelcase: [
      2,
      {
        properties: 'always'
      }
    ],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      2,
      'last'
    ],
    'computed-property-spacing': [
      2,
      'never'
    ],
    'eol-last': 2,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'id-blacklist': [
      2,
      'shit'
    ],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 2,
    'linebreak-style': [
      2,
      'unix'
    ],
    'max-nested-callbacks': [2, 6],
    'max-statements-per-line': [
      2,
      {
        max: 1
      }
    ],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: true
      }
    ],
    'new-parens': 2,
    'newline-per-chained-call': [
      2,
      {
        ignoreChainWithDepth: 5
      }
    ],
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 1
      }
    ],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-restricted-syntax': [
      2,
      'WithStatement'
    ],
    'no-whitespace-before-property': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 2,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [
      2,
      'never'
    ],
    'object-property-newline': [
      2,
      {
        allowMultiplePropertiesPerLine: true
      }
    ],
    'one-var': [
      2,
      'never'
    ],
    'operator-assignment': [
      2,
      'always'
    ],
    'operator-linebreak': [
      2,
      'after'
    ],
    'padded-blocks': [
      2,
      'never'
    ],
    'quote-props': [
      2,
      'as-needed'
    ],
    quotes: [
      2,
      'single'
    ],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    semi: [
      2,
      'always'
    ],
    'space-before-blocks': [
      2,
      'always'
    ],
    'space-before-function-paren': [
      2,
      'never'
    ],
    'space-in-parens': [
      2,
      'never'
    ],
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        block: {
          markers: ['!'],
          exceptions: ['*']
        }
      }
    ],
    'unicode-bom': [
      2,
      'never'
    ],

    // ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'constructor-super': 2,
    'generator-star-spacing': [
      2,
      'before'
    ],
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-rename': 2,
    'prefer-rest-params': 2,
    'require-yield': 2,
    'template-curly-spacing': [
      2,
      'never'
    ],
    'yield-star-spacing': [
      2,
      {
        before: true,
        after: false
      }
    ]
  }
};
