var currentUser = Parse.User.current();

if (currentUser) {
	document.getElementById("user_check").innerHTML = '<ul class="nav navbar-nav navbar-right">
						<li class="dropdown">
							<a class="dropdown-toggle" data-toggle="dropdown" href="#">
								<i class="fa fa-user"></i> {{user}} <span class="caret"></span>
						    </a>
							<ul class="dropdown-menu btn">
								<li class="text-left"><a href="#" id="nav_user"></a></li>

								<li class="text-left"><a href="#"><i class="fa fa-home"></i> Home</a></li>
								<li class="text-left"><a href="#"><i class="fa fa-sign-out"></i> Sign Out</a></li>
							</ul>
						</li>
						<li><a href="#"><i class="fa fa-gear"></i></a></li>
					</ul>';
	document.getElementById("nav_user").innerHTML = currentUser.user;
} else {
    document.getElementById("user_check").innerHTML = '<ul class="nav navbar-nav navbar-right">
						<li>
							<a href="/Signup">Sign Up</a>
						</li>
						<li class="dropdown">
						    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
							      Sign In<span class="caret"></span>
						    </a>
					     	<div class="dropdown-menu">
            			<form style="padding:15px" action="/Login" method="post" accept-charset="UTF-8" >
  									<input id="user_username" style="margin-bottom: 15px;border-radius:5px" type="text" name="user[username]" size="30" placeholder=" Username"/>
  									<input id="user_password" style="margin-bottom: 15px;border-radius:5px" type="password" name="user[password]" size="30" placeholder=" Password"/>
  									<input id="user_remember_me" style="float: left; margin-right: 10px;" type="checkbox" name="user[remember_me]" value="1" />
  									<label class="string optional" for="user_remember_me"> Remember me</label>
  									<input class="btn btn-primary" style="clear: left; width: 100%; height: 32px; font-size: 13px;border-radius:5px" onclick="saveData()"type="submit" name="commit" value="Sign In" />
								</form>
        			</div>
					  </li>
      					</ul>';
}