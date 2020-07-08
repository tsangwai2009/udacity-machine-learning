function FindProxyForURL(url, host)
{
   if (isInNet(host, "192.168.0.0", "255.255.0.0")) {
      return "DIRECT";
   } else {
      if (shExpMatch(url, "https:*"))
         return "PROXY secure.uku.im:8443; DIRECT" ;   
      return "DIRECT";
   }
}