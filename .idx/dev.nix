{ pkgs }:
{
  channel = "stable-24.05";

  packages = [
    (pkgs.nodejs_20.override { version = "20.19.0"; })
    pkgs.yarn
    pkgs.curl
  ];

  idx.extensions = [
    "angular.ng-template"
  ];

  idx.previews = {
    previews = {
      web = {
        command = [
          "ionic"
          "serve"
          "--host=0.0.0.0"
          "--port=$PORT"
        ];
        manager = "web";
      };
    };
  };
}
