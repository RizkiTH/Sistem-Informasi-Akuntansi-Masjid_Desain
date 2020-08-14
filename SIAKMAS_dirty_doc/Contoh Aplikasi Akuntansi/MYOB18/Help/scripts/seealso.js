// Copyright (c) 2002-2003 Quadralay Corporation.  All rights reserved.
//

function  WebWorksSeeAlso_Object()
{
  this.mbClickedLink = false;

  this.fOnClickButton = WebWorksSeeAlso_OnClickButton;
  this.fOnClickLink   = WebWorksSeeAlso_OnClickLink;
}

function  WebWorksSeeAlso_OnClickButton(ParamURL)
{
  if ( ! this.mbClickedLink)
  {
    document.location = ParamURL;
  }

  this.mbClickedLink = false;
}

function  WebWorksSeeAlso_OnClickLink()
{
  this.mbClickedLink = true;
}
