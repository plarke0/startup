import React from 'react';

export function Signup() {
  return (
    <main>
        <div class="container d-flex justify-content-center">
            <div class="card col-12 col-sm-6 col-xl-4 mb-3">
                <div class="card-body">
                    <form class="px-3 py-3">
                        <aside class="mb-2">
                            Note: I will call an api to filter inappropriate usernames here.
                        </aside>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username:</label>
                            <input id="username" type="text" placeholder="Username" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password:</label>
                            <input id="password" type="password" placeholder="Password" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label for="confirm-password" class="form-label">Confirm Password:</label>
                            <input id="confirm-password" type="password" placeholder="Password" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input id="remember-me" type="checkbox" class="form-check-input"/>
                                <label for="remember-me">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" id="sign-up" class="btn btn-primary">Sign Up</button>
                    </form>
                    <span>Already have an account? <a href="./login.html">Log in</a></span>
                </div>
            </div>
        </div>
    </main>
  );
}