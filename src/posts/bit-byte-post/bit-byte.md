---
title: 'What is bit and byte?'
date: '2021-01-10'
description: 'Bit, byte and the value they hold '
---

# 1. What is bit and byte? 

Bits are smallest unit of storage. A bit can represent 0 OR 1. 

A byte is 8 bits and can represent positive numbers from number 0 to number 255 (which means 256 numbers in total).

# 2. 1 byte can hold 1 character

Besides numbers, 8 bits or 1 byte can hold 1 character. Each character is encoded using a pattern of binary or an integer value. This integer value is the ASCII code of the character. For example, the ASCII value of 'A' is 65, 'B' is 66 all the way to 'Z' is 122. 

We can read more about the ASCII code [here](http://sticksandstones.kstrom.com/appen.html) 

# 3. How to calculate the value of binary numbers? 

Binary numbers are a pattern with N characters where each character is either 0 or 1. The total values each bit holds can be calculated using the formula:
`2^N` with the highest number being `2^N - 1`

- 1 bit, we have 2 distinct numbers 0 and 1 => highest number: 1
- 2 bits, we have 4 distinct numbers 00, 11, 01, 10 => highest number: 3
- All the way to 8 bits, from right to left, each bit in the range can in turn be 0 or 1, indicating the value at that position. So with the binary number 00010000, its value is 16, or we can say 00010000 represents number 16 in binary. Highest number 8 bits can hold is 2^8 - 1 = 255 (where all 8 positions are 1).

```
 0    0    0    1    0    0    0    0 
2^7  2^6  2^5  2^4  2^3  2^2  2^1  2^0
               16
```

# 4. 8 bits/ 1 byte can also represent negative numbers

That's right! 8 bits or a byte can hold negative numbers as well. And because the left part now represents the sign, it can only hold number ranging from -128 to 127. 

# 5. Some pre-calculated values

8 bits/ 1 byte => 256 values, highest number 255

16 bits / 2 byte => 65,536 value, highest number 65,535

32 bits / 4 byte => 4,294,967,296 value, highest number 4,294,967,295

1024 bytes = 1 Kb

1,048,576 bytes = 1 Mb

1,073,741,824 bytes = 1 Gb

1,099,511,627,776 bytes = 1 Tb


