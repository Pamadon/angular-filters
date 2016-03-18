#Angular Filters

Create some custom filters using Angular.

##Proper Case

Create a filter called `capitalize` that translates a string to proper case. This means each word has only the first character capitalized. Also, make sure this filter doesn't break with blank/undefined input.

###Usage example

```js
{{name | capitalize}}
```

###Example Input and Output

```
Input: jane doe
Outputs: Jane Doe

Input: MiSSiSSiPPi
Output Mississippi

Input: the quick brown FOX!!
Output: The Quick Brown Fox!!
```


##Ordinal

Create a filter called `ordinal` that takes a number and outputs the number with the proper ordinal suffix (1st, 2nd, 3rd, 4th, 5th, ...). If the filter receives something that is not a number it should just return that input unmodified.

###Usage example

```js
{{number | ordinal}}
```

###Example Input and Output

```
Input: 1
Output: 1st

Input: 453
Output: 453rd

Input: 5000
Output: 5000th

Input: taco
Output: taco
```

**Hint:** Generally you only have to look at the last digit, BUT don't forget that the teens are different (11th, 12th, 13th, 113th, etc.)

##Swear Filter

Sometimes your site needs to be G or PG. Create a filter called `swearfilter` that censors bad words by replacing the word with asterisks. You could also add options to leave the first letter, in case your viewers want some context for the word. For example:

```
Input: homework
Output: ********

Input: timely
Output: t*****
````
