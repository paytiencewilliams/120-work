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

    // **TAIL**
    push()
    //tail code goes here

    pop()
    // **END TAIL**

    pop();
    // **END BODY**


    // ** HEAD **********************************
    push();
    ellipse( 0, -20, 175, 175 )

    push()
    fill( 'rgba( 248, 172, 233, 0.66)')
    translate( 0, -20)
    ellipse( 0, 0, 175, 175)

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

    // **EARS**
    push()
    // ears code goes here

    pop()
    // **END EARS**

    pop();
    // **END HEAD**


    // ** LEGS **********************************
    push();
    // legs code goes here

    pop();
    // **END LEGS**


    // ** END CHARACTER SANDBOX *******************
    pop();

}
