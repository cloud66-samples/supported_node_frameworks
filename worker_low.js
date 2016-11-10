var uuid = require('node-uuid');
function f() {
    console.log( process.env.HOSTNAME + " >> some low workload with ID = " + uuid.v1()  );
    setTimeout( f, 1000 );
}
f();