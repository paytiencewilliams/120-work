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

    // **TAIL**
    push();
    stroke('rgba( 248, 172, 233, 1.0 )');
    strokeWeight(50);
    line( 15, 400, 250, 200 );

    pop();
    // **END TAIL**

    // ** BODY **********************************
    push();
    rect( -150, 20, 300, 400, 900 );

    push()
    fill( 'rgba( 248, 172, 233, 1.0 )')
    translate( -150, 20 )
    rect( 0, 0, 300, 400, 900 )

    pop();

    // **BELLY**
    push();
    rect( -100, 75, 200, 350, 900 );

    push()
    fill('rgba( 225, 225, 225, 0.66 )')

    pop();
    // **END BELLY**

    pop();
    // **END BODY**


    // ** HEAD **********************************
    push();
    ellipse( 0, -20, 175, 175 )

    push()
    fill( 'rgba( 248, 172, 233, 1.0 )')
    translate( 0, -20)
    ellipse( 0, 0, 175, 175)

    // **MOUTH**
    push();
    fill('rgba( 225, 225, 225, 0.66 )')
    rotate( radians(180))
    arc( 25, 0, 25, 25, 80, PI );

    push()
    fill('rgba( 225, 225, 225, 0.66 )')
    rotate( radians(99))
    translate( -20, 20 )
    arc( 25, 0, 25, 25, 80, PI );

    pop();
    // **END MOUTH**

    // **NOSE**
    push();
    // nose code goes here

    pop();
    // **END NOSE**

    // **WHISKERS**
    push();
    // whiskers code goes here

    pop();
    // **END WHISKERS**

    // **LEFT EYE**
    push();
    // left eye code goes here

    pop();
    // **END LEFT EYE**

    // **RIGHT EYE**
    push();
    // right eye code goes here

    pop();
    // **END RIGHT EYE**

    // ** LEFT EAR**
    push();
    // left ears code goes here

    pop();
    // **END LEFT EAR**

    // **RIGHT EAR**
    push();
    // right ears code goes here

    pop();
    // **END RIGHT EAR**

    pop();
    // **END HEAD**


    // ** LEGS **********************************
    push();
    // legs code goes here

    pop();
    // **END LEGS**


    // ** END CHARACTER SANDBOX ******************
    pop();

}
