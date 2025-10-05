<template>
    <!-- full-viewport background to avoid parent width constraints -->
    <div class="bgImg" aria-hidden="true"></div>
    <div class="registrationCard">
        <h1>Register</h1>
        <p>Create an account!</p>
        <p>Start managing your pantry and reduce food wastage!</p>
        <div>
            <form class="formInputs">
                <p>Name</p>
                <input type="text" value="" placeholder="Username" />

                <p>Email</p>
                <input type="text" value="" placeholder="Email" />

                <p>Password</p>
                <input type="text" value="" placeholder="Password" />

                <p>Confirm Password</p>
                <input type="text" value="" placeholder="Confirm Password" />

                <input type="submit" value="Register"></input>
            </form>
        </div>
    </div>
</template>

<style scoped>
.bgImg {
    position: fixed;
    inset: 0;
    background-image: url("../assets/Registration BG.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1; /* put the bg image behind the card thingy */
    display: flex;
    justify-content: center;
    align-items: center;
}

.registrationCard {
    display: flex;
    padding: 60px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    border-radius: 50px;
    background: #fff;
}

.formInputs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

h1 {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

/* p is for texts above the form */ 
p {
    color: #000;
    text-align: center;
    font-family: Arial;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 300px;
}

/* form p is for texts in the form */ 
form p {
    color: #000;
    text-align: left;
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

input {
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #d0d5dd;
    border-radius: 10px;
    background: #fff;
    box-shadow: none;
    outline: none;
    padding: 10px 12px;
    line-height: 1.2;
}
</style>
