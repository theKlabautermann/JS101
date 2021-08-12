function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*
All differences result from the different methods used but
-Since Array.push is a destructive method applied to a non-primitive argument,
the original Array that is passed by reference gets altered.
-Since Array.concat is not a destructive method,
we re-assign the returned value & the original array isn't altered.
*/