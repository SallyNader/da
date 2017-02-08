<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
class MailController extends Controller
{
   


   public function send(Request $request){




$name=$request->get('name');
$last=$request->get('last');
$company=$request->get('company');
$email=$request->get('email');
$website=$request->get('website');
$message=$request->get('message');
$phone=$request->get('phone');

Mail::send('templateMail',[$name,$last,$company,$email,$website,$message,$phone],funcion($message){


$message->from('info@daleel.com');
$message->to('SALLY.NADER.AHMED@hotmail.com','daleel')->subject('request');

});

// return redirect()->back();
   }

}
