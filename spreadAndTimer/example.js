const obj = {
    attr: 1,
    log() {
        console.log(this.attr);
        const ex = function () {
            console.log(this.attr);
        }.bind(this);// this in function

        const ex2 = () => {
            console.log(this.attr);// teisingai errorfunction
        };
        ex();
        ex2();

    }
}

const test = obj.log;
obj.log();
test();//finedunde