<template>
    <div class="login-container">
        <form class="login-form">
            <h1>Sign In</h1>
            <h3>Sign In to your account</h3>
            <h5>Manage your pantry and reduce food wastage!</h5>
            <div class="form-group">
                <label for="username">Email</label>
                <input type="email" id="username" name="username" required />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "UserLogin",
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url("../assets/background_pic.jpg") no-repeat center center;
    background-size: cover;
}

.login-form {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.login-form h1 {
    margin-bottom: 1rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
}

.form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {

    /* Sign In Template */

    width: 400px;
    height: 50px;
    border-radius: 10px;

    padding: 0.5rem 1rem;
    background-color: #066D58;
    color: white;
    border: none;
    cursor: pointer;
}
</style>