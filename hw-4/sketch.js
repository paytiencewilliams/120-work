function setup() {
    createCanvas( 600, 800 );
}

function draw() {
    background( 'rgb(212, 212, 212)' );

    // *****************************************************
    // create a sandbox for the entire character
    push();

    // move the entire grid for this character to the center of the canvas
    translate( 300, 400 );

    // ** BODY **********************************
    push();
    rect( -150, 20, 300, 400, 900 );

    push()
    fill( 'rgba( 248, 172, 233, 0.66 )')
    translate( -150, 20 )
    rect( 0, 0, 300, 400, 900 )

    pop();
    // **END BODY**


    // ** HEAD **********************************
    push();
    ellipse( 0, -20, 175, 175 )

    // **MOUTH**
    push();
    // mouth code goes here

    pop();
    // **END MOUTH**

    // **EYES**
    push();
    // eye code goes here

    pop();
    // **END EYES**

    pop();
    // **END HEAD**


    // ** ARMS **********************************
    push();
    // arms code goes here

    pop();
    // **END ARMS**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
