with (import <nixpkgs> {}); let
  env = bundlerEnv {
    name = "CCCwebsite";
    inherit ruby;
    gemfile = ./Gemfile;
    lockfile = ./Gemfile.lock;
    gemset = ./gemset.nix;
  };
in
  stdenv.mkDerivation {
    name = "CCCwebsite";
    buildInputs = [env ruby];

    shellHook = ''
      exec ${env}/bin/jekyll serve --watch
    '';
  }
