function* test() {
    yield 1;

    console.log('first test');

    yield 2;
    console.log('second test');

    return 3;
}

const h = test();
console.log(h.next());
console.log(h.next());
console.log(h.next());
console.log(h.next());
console.log("test pull command line");
console.log(h);
