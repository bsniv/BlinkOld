// List taken from https://chromium.googlesource.com/chromium/src/+/master/third_party/WebKit/Source/modules/bluetooth/BluetoothUUID.cpp

/* eslint-disable quote-props */

// eslint-disable-next-line no-unused-vars
const STANDARD_GATT_CHARACTERISTICS = {
  'gap.device_name': 0x2A00,
  'gap.appearance': 0x2A01,
  'gap.peripheral_privacy_flag': 0x2A02,
  'gap.reconnection_address': 0x2A03,
  'gap.peripheral_preferred_connection_parameters': 0x2A04,
  'gatt.service_changed': 0x2A05,
  alert_level: 0x2A06,
  tx_power_level: 0x2A07,
  date_time: 0x2A08,
  day_of_week: 0x2A09,
  day_date_time: 0x2A0A,
  exact_time_256: 0x2A0C,
  dst_offset: 0x2A0D,
  time_zone: 0x2A0E,
  local_time_information: 0x2A0F,
  time_with_dst: 0x2A11,
  time_accuracy: 0x2A12,
  time_source: 0x2A13,
  reference_time_information: 0x2A14,
  time_update_control_point: 0x2A16,
  time_update_state: 0x2A17,
  glucose_measurement: 0x2A18,
  battery_level: 0x2A19,
  temperature_measurement: 0x2A1C,
  temperature_type: 0x2A1D,
  intermediate_temperature: 0x2A1E,
  measurement_interval: 0x2A21,
  boot_keyboard_input_report: 0x2A22,
  system_id: 0x2A23,
  model_number_string: 0x2A24,
  serial_number_string: 0x2A25,
  firmware_revision_string: 0x2A26,
  hardware_revision_string: 0x2A27,
  software_revision_string: 0x2A28,
  manufacturer_name_string: 0x2A29,
  'ieee_11073-20601_regulatory_certification_data_list': 0x2A2A,
  current_time: 0x2A2B,
  magnetic_declination: 0x2A2C,
  scan_refresh: 0x2A31,
  boot_keyboard_output_report: 0x2A32,
  boot_mouse_input_report: 0x2A33,
  glucose_measurement_context: 0x2A34,
  blood_pressure_measurement: 0x2A35,
  intermediate_cuff_pressure: 0x2A36,
  heart_rate_measurement: 0x2A37,
  body_sensor_location: 0x2A38,
  heart_rate_control_point: 0x2A39,
  alert_status: 0x2A3F,
  ringer_control_point: 0x2A40,
  ringer_setting: 0x2A41,
  alert_category_id_bit_mask: 0x2A42,
  alert_category_id: 0x2A43,
  alert_notification_control_point: 0x2A44,
  unread_alert_status: 0x2A45,
  new_alert: 0x2A46,
  supported_new_alert_category: 0x2A47,
  supported_unread_alert_category: 0x2A48,
  blood_pressure_feature: 0x2A49,
  hid_information: 0x2A4A,
  report_map: 0x2A4B,
  hid_control_point: 0x2A4C,
  report: 0x2A4D,
  protocol_mode: 0x2A4E,
  scan_interval_window: 0x2A4F,
  pnp_id: 0x2A50,
  glucose_feature: 0x2A51,
  record_access_control_point: 0x2A52,
  rsc_measurement: 0x2A53,
  rsc_feature: 0x2A54,
  sc_control_point: 0x2A55,
  digital: 0x2A56,
  analog: 0x2A58,
  aggregate: 0x2A5A,
  csc_measurement: 0x2A5B,
  csc_feature: 0x2A5C,
  sensor_location: 0x2A5D,
  plx_spot_check_measurement: 0x2A5E,
  plx_continuous_measurement: 0x2A5F,
  plx_features: 0x2A60,
  cycling_power_measurement: 0x2A63,
  cycling_power_vector: 0x2A64,
  cycling_power_feature: 0x2A65,
  cycling_power_control_point: 0x2A66,
  location_and_speed: 0x2A67,
  navigation: 0x2A68,
  position_quality: 0x2A69,
  ln_feature: 0x2A6A,
  ln_control_point: 0x2A6B,
  elevation: 0x2A6C,
  pressure: 0x2A6D,
  temperature: 0x2A6E,
  humidity: 0x2A6F,
  true_wind_speed: 0x2A70,
  true_wind_direction: 0x2A71,
  apparent_wind_speed: 0x2A72,
  apparent_wind_direction: 0x2A73,
  gust_factor: 0x2A74,
  pollen_concentration: 0x2A75,
  uv_index: 0x2A76,
  irradiance: 0x2A77,
  rainfall: 0x2A78,
  wind_chill: 0x2A79,
  heat_index: 0x2A7A,
  dew_point: 0x2A7B,
  descriptor_value_changed: 0x2A7D,
  aerobic_heart_rate_lower_limit: 0x2A7E,
  aerobic_threshold: 0x2A7F,
  age: 0x2A80,
  anaerobic_heart_rate_lower_limit: 0x2A81,
  anaerobic_heart_rate_upper_limit: 0x2A82,
  anaerobic_threshold: 0x2A83,
  aerobic_heart_rate_upper_limit: 0x2A84,
  date_of_birth: 0x2A85,
  date_of_threshold_assessment: 0x2A86,
  email_address: 0x2A87,
  fat_burn_heart_rate_lower_limit: 0x2A88,
  fat_burn_heart_rate_upper_limit: 0x2A89,
  first_name: 0x2A8A,
  five_zone_heart_rate_limits: 0x2A8B,
  gender: 0x2A8C,
  heart_rate_max: 0x2A8D,
  height: 0x2A8E,
  hip_circumference: 0x2A8F,
  last_name: 0x2A90,
  maximum_recommended_heart_rate: 0x2A91,
  resting_heart_rate: 0x2A92,
  sport_type_for_aerobic_and_anaerobic_thresholds: 0x2A93,
  three_zone_heart_rate_limits: 0x2A94,
  two_zone_heart_rate_limit: 0x2A95,
  vo2_max: 0x2A96,
  waist_circumference: 0x2A97,
  weight: 0x2A98,
  database_change_increment: 0x2A99,
  user_index: 0x2A9A,
  body_composition_feature: 0x2A9B,
  body_composition_measurement: 0x2A9C,
  weight_measurement: 0x2A9D,
  weight_scale_feature: 0x2A9E,
  user_control_point: 0x2A9F,
  magnetic_flux_density_2D: 0x2AA0,
  magnetic_flux_density_3D: 0x2AA1,
  language: 0x2AA2,
  barometric_pressure_trend: 0x2AA3,
  bond_management_control_point: 0x2AA4,
  bond_management_feature: 0x2AA5,
  'gap.central_address_resolution_support': 0x2AA6,
  cgm_measurement: 0x2AA7,
  cgm_feature: 0x2AA8,
  cgm_status: 0x2AA9,
  cgm_session_start_time: 0x2AAA,
  cgm_session_run_time: 0x2AAB,
  cgm_specific_ops_control_point: 0x2AAC,
  indoor_positioning_configuration: 0x2AAD,
  latitude: 0x2AAE,
  longitude: 0x2AAF,
  local_north_coordinate: 0x2AB0,
  'local_east_coordinate.xml': 0x2AB1,
  floor_number: 0x2AB2,
  altitude: 0x2AB3,
  uncertainty: 0x2AB4,
  location_name: 0x2AB5,
  uri: 0x2AB6,
  http_headers: 0x2AB7,
  http_status_code: 0x2AB8,
  http_entity_body: 0x2AB9,
  http_control_point: 0x2ABA,
  https_security: 0x2ABB,
  tds_control_point: 0x2ABC,
  ots_feature: 0x2ABD,
  object_name: 0x2ABE,
  object_type: 0x2ABF,
  object_size: 0x2AC0,
  object_first_created: 0x2AC1,
  object_last_modified: 0x2AC2,
  object_id: 0x2AC3,
  object_properties: 0x2AC4,
  object_action_control_point: 0x2AC5,
  object_list_control_point: 0x2AC6,
  object_list_filter: 0x2AC7,
  object_changed: 0x2AC8,
  resolvable_private_address_only: 0x2AC9,
  fitness_machine_feature: 0x2ACC,
  treadmill_data: 0x2ACD,
  cross_trainer_data: 0x2ACE,
  step_climber_data: 0x2ACF,
  stair_climber_data: 0x2AD0,
  rower_data: 0x2AD1,
  indoor_bike_data: 0x2AD2,
  training_status: 0x2AD3,
  supported_speed_range: 0x2AD4,
  supported_inclination_range: 0x2AD5,
  supported_resistance_level_range: 0x2AD6,
  supported_heart_rate_range: 0x2AD7,
  supported_power_range: 0x2AD8,
  fitness_machine_control_point: 0x2AD9,
  fitness_machine_status: 0x2ADA,
};
