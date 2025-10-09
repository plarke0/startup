import React from 'react';

//TODO: Fix button functionality
//TODO: Change <a> to NavLink

export function Login() {
  return (
    <main>
        <div class="container d-flex justify-content-center">
            <div class="card col-12 col-sm-6 col-xl-4 mb-3">
                <div class="card-body">
                    <form class="px-3 py-3">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username:</label>
                            <input id="username" type="text" placeholder="Username" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password:</label>
                            <input id="password" type="password" placeholder="Password" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <div class="form-check">
                                <input id="remember-me" type="checkbox" class="form-check-input"/>
                                <label for="remember-me">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" id="log-in" class="btn btn-primary">Log In</button>
                    </form>
                    <span>Don't have an account? <a href="./signup.html">Sign up</a></span>
                </div>
            </div>
        </div>
    </main>
  );
}