@extends('master')

@section('metatagseo')
<title>top marketing company | marketing company names | top digital marketing agencies</title>
<meta name="description" content="we are at the top of marketing companies,we are one of companies with successful marketing campaigns,lead generation companies,mobile app marketing companies,facebook marketing solutions,best online marketing companies,google display network ad specs,manage multiple social media accounts,best web design agencies in the world">
<meta name="keywords" content="top marketing companies,marketing company names,top market research companies,top digital marketing agencies,social marketing companies,top social media marketing companies,best online marketing companies,companies that use social media marketing effectively,largest marketing company in the world,top 20 market research companies in the world,facebook marketing solutions,social media management pricing,manage social media accounts,companies with successful marketing campaigns,lead generation companies,best web design agencies in the world,best search engine optimization company,pay per click management company,the best online marketing companies,who is the best local seo company,large advertising companies">
@stop



@section('content')

	<div class="layout--container">

				<div class="map"></div>

				<div class="section -odd">
					<div class="container">
						<div class="contact_us -page">
							<header class="contact_us--header" style="text-transform: capitalize;">
								<h1 class="contact_us--title title -h1" style="font-size: 32px;text-transform: capitalize;">Get in touch</h1>
								<p class="contact_us--description text -medium"> </p>
							</header>

							<div class="row">

								<div class="col-md-4 col-md-push-8">

									<!-- contacts -->
									<div class="contacts -page">

										<ul class="contacts--list">

											<li class="contacts--item">
												<span class="contacts--item_icon">
												<i class="bi_com-phone"></i>
											</span>

												<strong>2 01026639985</strong> Sunday - thursday, 9am - 6pm
											</li>

											<li class="contacts--item">
												<span class="contacts--item_icon">
												<i class="bi_com-email"></i>
											</span>

												<strong><a href="mailto:info@seocompany.com">support@daleel.com.eg</a></strong> Drop us a line anytime!

											</li>

											<li class="contacts--item">
												<span class="contacts--item_icon">
												<i class="bi_location-alt-pin"></i>
											</span>

												<strong>2 Khaled Ibn El Waleed Infront of Radio Shack store- Second Floor - Apartment 22 ,Sheraton Heliopolis, Cairo, Egypt</strong> Sunday - thursday, 9am - 6pm
											</li>

										</ul>

									</div>
									<!-- /contacts -->

								</div>


								<div class="col-md-8 col-md-pull-4">

									<form action="{{url('send')}}" method="post" class="form send-form">
							

                                                  {{ csrf_field() }}
										<div class="form--wrap">
											<fieldset>

												<!-- row -->
												<div class="form--row">

													<!-- col -->
													<div class="form--col">
														<div class="field -wide">
															<input type="text" placeholder="Name" name="name" value="{{old('name')}}" >
															<span class="field--focus_border"></span>

														</div>
													</div>
													<!-- /col -->

													<!-- col -->
													<div class="form--col">
														<div class="field -wide">
															<input type="text" placeholder="Last Name" value="{{old('last')}}" name="last">
															<span class="field--focus_border"></span>
														</div>
													</div>
													<!-- /col -->

													<!-- col -->
													<div class="form--col">
														<div class="field -wide">
															<input type="text" placeholder="Company" value="{{old('company')}}" name="company">
															<span class="field--focus_border"></span>
														</div>
													</div>
													<!-- /col -->

												</div>
												<!-- /row -->

												<!-- row -->
												<div class="form--row">

													<!-- col -->
													<div class="form--col">
														<div class="field -wide">
															<input type="email" placeholder="Email" value="{{old('email')}}" name="email" >
															<span class="field--focus_border"></span>
														</div>
													</div>
													<!-- /col -->

													<!-- col -->
													<div class="form--col">
														<div class="field -wide">
															<input type="text" placeholder="Phone Number" value="{{old('phone')}}" name="phone">
															<span class="field--focus_border"></span>
														</div>
													</div>
													<!-- /col -->

													<!-- col -->
													<div class="form--col">
														<div class="field -wide">
															<input type="text" placeholder="Website URL" value="{{old('website')}}" name="website">
															<span class="field--focus_border"></span>
														</div>
													</div>
													<!-- /col -->

												</div>
												<!-- /row -->

												<!-- row -->
												<div class="form--row">
													<div class="form--col">
														<div class="field -wide">
															<textarea rows="6" placeholder="Your message..." name="message" value="{{old('message')}}" ></textarea>
															<span class="field--focus_border"></span>
														</div>
													</div>
												</div>
												<!-- /row -->

											</fieldset>
											<footer class="form--footer">
												<button type="submit" class="form--submit button -primary -large"   >send message</button>
											</footer>
										</div>
								
									</form>

								</div>


							</div>
						</div>
					</div>
				</div>

			</div>

@stop