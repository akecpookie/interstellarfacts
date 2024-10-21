let date  = new Date();
    let year = date.getFullYear();
    setInterval(year, 1000);
    document.getElementById ("copyright").innerHTML = `Copyright &copy; ${year} Planet-Info`;