import React from 'react'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <>
      
                        <div className="bg-dark" style={{height:"100%"}}>


                        <h4 className='text-white text-center'>Dashboard</h4>
                        <nav class="nav flex-column text-white h-100">
                            <Link href="/admin/crud/category-tag"><a className="nav-link active text-white">Category</a></Link>
                            <Link href="/admin/crud/category-tag"><a className="nav-link text-white">Tag</a></Link>
                            <Link href="/admin/crud/blogs"><a className="nav-link text-white">Blog</a></Link>
                            <Link href="/user/update"><a className="nav-link text-white">Profile</a></Link>
                            <Link href="#"><a className="nav-link text-white">Setting</a></Link>
                            
                                   
                        </nav>



                            {/* <ul className="list-group bg-dark">
                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Category</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/category-tag">
                                        <a>Tag</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blog">Blog</Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Update/Delete Blog</a>
                                    </Link>
                                </li>

                                <li className="list-group-item">
                                    <Link href="/user/update">
                                        <a>Profile</a>
                                    </Link>
                                </li>
                            </ul> */}
                        </div>

                        



                        {/* <!--MAIN NAVIGATION-->
            <!--===================================================--> */}
            <nav id="mainnav-container">
                <div id="mainnav">


                    {/* <!--OPTIONAL : ADD YOUR LOGO TO THE NAVIGATION-->
                    <!--It will only appear on small screen devices.-->
                    <!--================================ */}
                    <div class="mainnav-brand">
                        <a href="index.html" class="brand">
                            <img src="img/logo.png" alt="Nifty Logo" class="brand-icon"/>
                            <span class="brand-text">Nifty</span>
                        </a>
                        <a href="#" class="mainnav-toggle"><i class="pci-cross pci-circle icon-lg"></i></a>
                    </div>
                    {/* --> */}



                    {/* <!--Menu--> */}
                    {/* <!--================================--> */}
                    <div id="mainnav-menu-wrap">
                        <div class="nano">
                            <div class="nano-content">

                               


                                <ul id="mainnav-menu" class="list-group">
						
						            {/* <!--Category name--> */}
						            <li class="list-header">Navigation</li>
						
						            {/* <!--Menu list item--> */}
						            <li>
						                <a href="#">
						                    <i class="demo-pli-home"></i>
						                    <span class="menu-title">Dashboard</span>
											<i class="arrow"></i>
						                </a>
						
						                {/* <!--Submenu--> */}
						                <ul class="collapse">
						                    <li><a href="index.html">Dashboard 1</a></li>
											<li><a href="dashboard-2.html">Dashboard 2</a></li>
											<li><a href="dashboard-3.html">Dashboard 3</a></li>
											
						                </ul>
						            </li>
						
						            {/* <!--Menu list item--> */}
						            <li>
						                <a href="#">
						                    <i class="demo-pli-split-vertical-2"></i>
						                    <span class="menu-title">Layouts</span>
											<i class="arrow"></i>
						                </a>
						
						                {/* <!--Submenu--> */}
						                <ul class="collapse">
						                    <li><a href="layouts-collapsed-navigation.html">Collapsed Navigation</a></li>
											<li><a href="layouts-offcanvas-navigation.html">Off-Canvas Navigation</a></li>
											<li><a href="layouts-offcanvas-slide-in-navigation.html">Slide-in Navigation</a></li>
											<li><a href="layouts-offcanvas-revealing-navigation.html">Revealing Navigation</a></li>
											<li class="list-divider"></li>
											<li><a href="layouts-aside-right-side.html">Aside on the right side</a></li>
											<li><a href="layouts-aside-left-side.html">Aside on the left side</a></li>
											<li><a href="layouts-aside-dark-theme.html">Dark version of aside</a></li>
											<li class="list-divider"></li>
											<li><a href="layouts-fixed-navbar.html">Fixed Navbar</a></li>
											<li><a href="layouts-fixed-footer.html">Fixed Footer</a></li>
											
						                </ul>
						            </li>
						
						            {/* <!--Menu list item--> */}
						            <li>
						                <a href="widgets.html">
						                    <i class="demo-pli-gear"></i>
						                    <span class="menu-title">
												Widgets
												<span class="pull-right badge badge-warning">24</span>
											</span>
						                </a>
						            </li>
						
						           
						
						
						            {/* <!--Menu list item--> */}
						            <li class="active-sub">
						                <a href="#">
						                    <i class="demo-pli-speech-bubble-5"></i>
						                    <span class="menu-title">Blog Apps</span>
											<i class="arrow"></i>
						                </a>
						
						                {/* <!--Submenu--> */}
						                <ul class="collapse in">
											<li class="list-divider"></li>
											<li class="active-link"><a href="blog-manage-posts.html">Manage Posts</a></li>
											<li><a href="blog-add-edit-post.html">Add Edit Post</a></li>
											
						                </ul>
						            </li>
						</ul>

                            </div>
                        </div>
                    </div>
                    {/* <!--================================-->
                    <!--End menu--> */}

                </div>
            </nav>
            {/* <!--===================================================-->
            <!--END MAIN NAVIGATION--> */}


                    
      </>
    
  );
}

export default Sidebar;
