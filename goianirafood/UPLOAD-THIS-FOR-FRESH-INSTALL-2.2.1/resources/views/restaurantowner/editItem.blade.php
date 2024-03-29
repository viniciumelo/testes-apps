@extends('admin.layouts.master')
@section("title") {{__('storeDashboard.ipePageTitle')}}
@endsection
@section('content')
<div class="page-header">
    <div class="page-header-content header-elements-md-inline">
        <div class="page-title d-flex">
            <h4><i class="icon-circle-right2 mr-2"></i>
                <span class="font-weight-bold mr-2">{{__('storeDashboard.ipeEditing')}}</span>
                <span class="badge badge-primary badge-pill animated flipInX">{{ $item->name }} <i class="icon-circle-right2 mx-1"></i>
                    {{ $item->restaurant->name }}</span>
            </h4>
            <a href="#" class="header-elements-toggle text-default d-md-none"><i class="icon-more"></i></a>
        </div>
    </div>
</div>
<div class="content">
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <form action="{{ route('restaurant.updateItem') }}" method="POST" enctype="multipart/form-data">
                    <legend class="font-weight-semibold text-uppercase font-size-sm">
                        <i class="icon-address-book mr-2"></i> {{__('storeDashboard.ipeItemDetails')}}
                    </legend>
                    <input type="hidden" name="id" value="{{ $item->id }}">
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>{{__('storeDashboard.ipmLabelName')}}:</label>
                        <div class="col-lg-9">
                            <input value="{{ $item->name }}" type="text" class="form-control form-control-lg"
                                name="name" placeholder="{{__('storeDashboard.ipmPhName')}}" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelDescription')}}:</label>
                        <div class="col-lg-9">
                            <textarea class="summernote-editor" name="desc" placeholder="{{__('storeDashboard.ipmPhDescription')}}"
                                rows="6">{{ $item->desc }}</textarea>
                        </div>
                    </div>

                    @if($item->old_price == 0)
                    <div class="form-group row" style="display: none;" id="discountedTwoPrice">
                        <div class="col-lg-6">
                            <label class="col-form-label">{{__('storeDashboard.ipmLabelMarkPrice')}}:</label>
                            <input type="text" class="form-control form-control-lg price" name="old_price"
                                placeholder="{{__('storeDashboard.ipmOldPricePh')}}  {{ config('settings.currencyFormat') }}"
                                value="{{ $item->old_price }}">
                        </div>
                        <div class="col-lg-6">
                            <label class="col-form-label"><span class="text-danger">*</span>{{__('storeDashboard.ipmLabelSellingPrice')}}:</label>
                            <input type="text" class="form-control form-control-lg price" name="price"
                                placeholder="{{__('storeDashboard.ipmOldPricePh')}} {{ config('settings.currencyFormat') }}" id="newSP"
                                value="{{ $item->price }}">
                        </div>
                    </div>

                    <div class="form-group row" id="singlePrice">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>{{__('storeDashboard.ipmLabelPrice')}}:</label>
                        <div class="col-lg-5">
                            <input type="text" class="form-control form-control-lg price" name="price"
                                placeholder="{{__('storeDashboard.ipmOldPricePh')}} {{ config('settings.currencyFormat') }}" required id="oldSP"
                                value="{{ $item->price }}">
                        </div>
                        <div class="col-lg-4">
                            <button type="button" class="btn btn-secondary btn-labeled btn-labeled-left mr-2"
                                id="addDiscountedPrice">
                                <b><i class="icon-percent"></i></b>
                                {{__('storeDashboard.ipmAddDiscountBtn')}}
                            </button>
                        </div>
                    </div>

                    <script>
                        $('#addDiscountedPrice').click(function(event) {
                            let price = $('#oldSP').val();
                            $('#newSP').val(price).attr('required', 'required');;
                            $('#singlePrice').remove();
                            $('#discountedTwoPrice').show();
                        });
                    </script>
                    @else
                    <div class="form-group row">
                        <div class="col-lg-6">
                            <label class="col-form-label">{{__('storeDashboard.ipmLabelMarkPrice')}}: <i class="icon-question3 ml-1"
                                    data-popup="tooltip" title="Make this filed empty or zero if not required"
                                    data-placement="top"></i> </label>
                            <input type="text" class="form-control form-control-lg price" name="old_price"
                                placeholder="{{__('storeDashboard.ipmOldPricePh')}} {{ config('settings.currencyFormat') }}"
                                value="{{ $item->old_price }}">
                        </div>
                        <div class="col-lg-6">
                            <label class="col-form-label"><span class="text-danger">*</span>{{__('storeDashboard.ipmLabelSellingPrice')}}:</label>
                            <input type="text" class="form-control form-control-lg price" name="price"
                                placeholder="{{__('storeDashboard.ipmOldPricePh')}} {{ config('settings.currencyFormat') }}" id="newSP"
                                value="{{ $item->price }}">
                        </div>
                    </div>
                    @endif

                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>{{__('storeDashboard.ipmLabelItemRestaurant')}}:</label>
                        <div class="col-lg-9">
                            <select class="form-control select" name="restaurant_id" required>
                                @foreach ($restaurants as $restaurant)
                                <option value="{{ $restaurant->id }}" class="text-capitalize" @if($item->restaurant_id
                                    == $restaurant->id) selected="selected" @endif>{{ $restaurant->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label"><span class="text-danger">*</span>{{__('storeDashboard.ipmLabelItemCategory')}}:</label>
                        <div class="col-lg-9">
                            <select class="form-control select" name="item_category_id" required>
                                @foreach ($itemCategories as $itemCategory)
                                <option value="{{ $itemCategory->id }}" class="text-capitalize" @if($item->
                                    item_category_id == $itemCategory->id) selected="selected"
                                    @endif>{{ $itemCategory->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelAddonCategory')}}:</label>
                        <div class="col-lg-9">
                            @foreach($item->addon_categories as $addonCategory)
                            <span class="badge badge-flat border-grey-800"
                                style="font-size: 0.9rem;">{{ $addonCategory->name }}
                            </span>
                            @endforeach

                            @if(count($item->addon_categories))
                            <button class="btn btn-sm btn-danger badge badge-danger float-right" data-toggle="modal"
                                data-target="#removeAllAddonConfirmation" type="button" id="removeAllAddons"
                                style="font-size: 0.9rem;">{{__('storeDashboard.ipeRemoveAllAddonsBtn')}}
                            </button>
                            <input type="hidden" name="remove_all_addons" value="0">

                            <div id="removeAllAddonConfirmation" class="modal fade mt-5" tabindex="-1">
                                <div class="modal-dialog modal-xs">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title"><span class="font-weight-bold">{{__('storeDashboard.ipeConfirmTitle')}}</span>
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div class="modal-body">
                                            <span class="help-text">{{__('storeDashboard.ipeConfirmContent')}}</span>
                                            <div class="modal-footer mt-4">
                                                <button type="submit" class="btn btn-primary">{{__('storeDashboard.ipeConfirmYes')}}</button>
                                                <button type="button" class="btn btn-danger"
                                                    data-dismiss="modal">{{__('storeDashboard.ipeConfirmYes')}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script>
                                $('#removeAllAddons').click(function(event) {
                                        $("[name='remove_all_addons']").val(1);
                                    });
                                    $('#removeAllAddonConfirmation').on('hidden.bs.modal', function () {
                                         $("[name='remove_all_addons']").val(0);
                                    });
                            </script>
                            @endif

                            <select multiple="multiple" class="form-control select" data-fouc
                                name="addon_category_item[]">
                                @foreach($addonCategories as $addonCategory)
                                <option value="{{ $addonCategory->id }}" class="text-capitalize">
                                    {{ $addonCategory->name }} @if($addonCategory->description != null)-> {{ $addonCategory->description }} @endif</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelImage')}}:</label>
                        <div class="col-lg-9">
                            <img src="{{ substr(url("/"), 0, strrpos(url("/"), '/')) }}{{ $item->image }}" alt="Image"
                                width="160" style="border-radius: 0.275rem;">
                            <img class="slider-preview-image hidden" style="border-radius: 0.275rem;" />
                            <div class="uploader">
                                <input type="hidden" name="old_image" value="{{ $item->image }}">
                                <input type="file" class="form-control-lg form-control-uniform" name="image"
                                    accept="image/x-png,image/gif,image/jpeg" onchange="readURL(this);">
                                <span class="help-text text-muted">{{__('storeDashboard.ipmImageHelperText')}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelIsRecommended')}}</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                    <input value="true" type="checkbox" class="switchery-primary recommendeditem"
                                        @if($item->is_recommended) checked="checked" @endif name="is_recommended">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelIsPopular')}}</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                    <input value="true" type="checkbox" class="switchery-primary popularitem"
                                        @if($item->is_popular) checked="checked" @endif name="is_popular">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelIsNew')}}</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                    <input value="true" type="checkbox" class="switchery-primary newitem"
                                        @if($item->is_new) checked="checked" @endif name="is_new">
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label">{{__('storeDashboard.ipmLabelIsVeg')}}</label>
                        <div class="col-lg-9">
                            <div class="checkbox checkbox-switchery mt-2">
                                <label>
                                    <input value="true" type="checkbox" class="switchery-primary vegitem"
                                        @if($item->is_veg) checked="checked" @endif name="is_veg">
                                </label>
                            </div>
                        </div>
                    </div>
                    @csrf
                    <div class="text-left">
                        <div class="btn-group btn-group-justified" style="width: 225px">
                            @if($item->is_active)
                            <a class="btn btn-primary" href="{{ route('restaurant.disableItem', $item->id) }}">
                            {{__('storeDashboard.ipeDisable')}}
                                <i class="icon-switch2 ml-1"></i>
                            </a>
                            @else
                            <a class="btn btn-danger" href="{{ route('restaurant.disableItem', $item->id) }}">
                            {{__('storeDashboard.ipeEnable')}}
                                <i class="icon-switch2 ml-1"></i>
                            </a>
                            @endif
                        </div>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="btn btn-primary">
                        {{__('storeDashboard.update')}}
                            <i class="icon-database-insert ml-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<script>
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('.slider-preview-image')
                    .removeClass('hidden')
                    .attr('src', e.target.result)
                    .width(120)
                    .height(120);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    $(function () {
       $('.summernote-editor').summernote({
                  height: 200,
                  popover: {
                      image: [],
                      link: [],
                      air: []
                    }
           }); 
        $('.select').select2();
    
         var recommendeditem = document.querySelector('.recommendeditem');
        new Switchery(recommendeditem, { color: '#f44336' });
    
        var popularitem = document.querySelector('.popularitem');
        new Switchery(popularitem, { color: '#8360c3' });
    
        var newitem = document.querySelector('.newitem');
        new Switchery(newitem, { color: '#333' });

        var vegitem = document.querySelector('.vegitem');
       new Switchery(vegitem, { color: '#008000' });
       
        
        $('.form-control-uniform').uniform();
        $('.price').numeric({allowThouSep:false, maxDecimalPlaces: 2 });
    });
</script>
@endsection