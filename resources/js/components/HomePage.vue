<template>
    <div id="app">
        <!-- Header -->
        <header>
            <nav>
                <div class="nav-left">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#produk">Product</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div class="nav-right">
                    <ul>
                        <!-- <li><a href="#login"><i class="fa fa-user"></i></a></li> -->
                        <!-- <li><a href="#login"><i class="fa fa-user"></i></a></li> -->
                        <li><router-link to="/Login"><i class="fa fa-user"></i></router-link></li>
                        <li><a href="#"><i class="fa fa-search"></i></a></li>
                        <li><a href="#cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
            </nav>
            <main>
                <router-view/>
            </main>
        </header>
        
        
        <!-- Hero Section -->
        <div class="hero-section">
            <button class="get-started-btn">Get Started</button>
        </div>
        
        
        <!-- Registrasi dan Login Section -->
        <!-- <div id="login" class="auth-section">
            <div class="register-box">
                <h3>Registrasi Akun</h3>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="No. Telepon" />
                    <button type="button">Registrasi</button>
                    <p>Sudah memiliki akun? <a href="#">klik disini</a></p>
                </form>
                </div>
                <div class="login-box">
                <h3>Login Akun</h3>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="button">Login</button>
                    <p>Belum memiliki akun? <a href="#">klik disini</a></p>
                </form>
            </div>
        </div> -->
        
        
        <!-- Produk Section -->
        <h2 id="produk" class="product-section-title">PRODUK</h2>
        <div class="product-grid">
            <div class="product-card" v-for="n in 12" :key="n">
                <div class="product-image">
                    <div class="placeholder"></div>
                </div>
                <div class="product-details">
                    <h3>Nama Produk</h3>
                    <p>Stok 49</p>
                    <p>Rp. 130.000</p>
                    <div class="quantity-control">
                        <button>-</button>
                        <span>2</span>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
        
        
        <!-- Keranjang Belanja Section -->
        <div id="cart" class="cart-section">
            <h3>KERANJANG BELANJA</h3>
            <div class="cart-items">
                <div class="cart-item">
                    <i class="fa fa-shopping-cart"></i> Produk 1
                    <span>Jumlah: 2</span>
                </div>
                <div class="cart-item">
                    <i class="fa fa-shopping-cart"></i> Produk 2
                    <span>Jumlah: 1</span>
                </div>
            </div>
        </div>
        
        
        <!-- Transaksi Section -->
        <div class="transaction-section">
            <h3>Transaksi</h3>
            <form class="transaction-form">
                <div class="form-group">
                    <label for="name">Nama</label>
                    <input type="text" id="name" placeholder="Masukkan Nama Lengkap Anda" required />
                </div>
                <div class="form-group">
                    <label for="address">Alamat</label>
                    <input type="text" id="address" placeholder="Masukkan Alamat Anda" required />
                </div>
                <div class="form-group">
                    <label for="phone">Nomor Telepon</label>
                    <input type="tel" id="phone" placeholder="Masukkan Nomor Telepon Anda" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Masukkan Email Anda" required />
                </div>
                <button type="submit" class="submit-button">SELESAIKAN TRANSAKSI</button>
            </form>
        </div>
        
        
        <!-- About Section -->
        <div id="about" class="about-section">
            <h3>About UD. Citra Alam</h3>
            <p>Pemasok bahan bangunan terkemuka dengan komitmen pada kualitas dan kepuasan pelanggan.</p>
            <div class="about-info">
                <h4>UD. Citra Alam</h4>
                <p>Bahan Bangunan</p>
                <p>Supplier Konstruksi</p>
                <p>Jasa Terpercaya</p>
                <p>Kami menghadirkan bahan bangunan terbaik untuk memastikan keberhasilan proyek Anda.</p>
            </div>
        </div>
        
        
        <!-- Contact Info Section -->
        <div class="contact-info">
            <h3>Contact Info</h3>
            <p><i class="fa fa-phone"></i> Telepon: +62 123-4567</p>
            <p><i class="fa fa-envelope"></i> Email: support@citraalam.com</p>
            <p><i class="fa fa-map-marker"></i> Alamat: Jl. XYZ, Nama Kota, Indonesia</p>
        </div>
        
        
        <footer>
            <p>© 2024 UD. Citra Alam. All Rights Reserved.</p>
        </footer>
        </div>
</template>


<script>
export default {
  name: "App",
};
</script>
