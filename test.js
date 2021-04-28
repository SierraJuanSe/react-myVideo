const v = 1;

const f1 = function () {
  console.log(v);
};

const f2 = function () {
  const v = 2;
  f1();
};

f2();
